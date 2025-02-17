import {FC, PropsWithChildren, createContext, useContext, useMemo} from 'react';

import {StateCreator, StoreApi, UseBoundStore, create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {shallow} from 'zustand/shallow';

type HasAnyKeys<T, K extends string | number | symbol, True, False> = keyof T extends Exclude<keyof T, K>
  ? False
  : True;
type ObjectWithoutFunctions<T> = Pick<T, {[K in keyof T]: T[K] extends (...args: any) => any ? never : K}[keyof T]>;

type InitialState<T> = Partial<ObjectWithoutFunctions<T>>;
type StoreFactory<T> = (initialState?: InitialState<T>) => UseBoundStore<StoreApi<T>>;

export const createStoreFactory =
  <T,>(name: string, createSlice: StateCreator<T>): StoreFactory<T> =>
  (initialState?) =>
    create<T>()(
      devtools(
        (...a) => ({
          ...createSlice(...a),
          ...initialState,
        }),
        {
          name: `${name} - Zustand Store`,
          enabled: process.env.NODE_ENV === 'development',
        }
      )
    );

class StoreFactoryBuilder<T> {
  private name: string;
  private slice: StateCreator<T>;

  public constructor(name: string, slice: StateCreator<T>) {
    this.name = name;
    this.slice = slice;
  }

  public with<U>(
    next: HasAnyKeys<T, keyof U, never, StateCreator<U>>
  ): HasAnyKeys<T, keyof U, never, StoreFactoryBuilder<T & U>> {
    // @ts-ignore:
    return new StoreFactoryBuilder<T & U>(this.name, (...a) => ({...this.slice(...a), ...next(...a)}));
  }

  public end(): StoreFactory<T> {
    return createStoreFactory(this.name, this.slice);
  }
}

export const createStoreBuilder = (name: string) => new StoreFactoryBuilder(name, () => ({}));

export const connectStore = <T,>(createStore: StoreFactory<T>) => {
  type ShallowComponent = FC<PropsWithChildren<{}>>;
  type StoreSelector = <U>(selector: (state: T) => U) => U;
  const StoreContext = createContext<{use?: StoreSelector}>(undefined!);

  const useStore: StoreSelector = selector => {
    const context = useContext(StoreContext);
    if (!context?.use) {
      throw new Error('Store was not injected.');
    }
    return context.use(selector);
  };

  const useNewStore = (initialState?: InitialState<T>): [ShallowComponent, StoreSelector] => {
    // Ensure that this store is not created yet in this place
    const context = useContext(StoreContext);
    if (context?.use) {
      throw new Error('The store was already injected.');
    }

    // Build the store
    const store = useMemo(() => createStore(initialState), []);
    const use: StoreSelector = selector => store(selector, shallow);
    const Provider: ShallowComponent = useMemo(
      () =>
        ({children}) =>
          <StoreContext.Provider value={{use}}>{children}</StoreContext.Provider>,
      []
    );

    return [Provider, store];
  };

  return {
    use: useStore,
    init: useNewStore,
  };
};
