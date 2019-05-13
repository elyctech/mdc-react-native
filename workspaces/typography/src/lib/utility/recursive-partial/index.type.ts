// https://stackoverflow.com/questions/41980195/recursive-partialt-in-typescript-2-1/51365037#51365037
type RecursivePartial<T> = {
  [P in keyof T]?:
    T[P] extends (infer U)[] ? RecursivePartial<U>[] :
    T[P] extends object ? RecursivePartial<T[P]> :
    T[P];
};

export default RecursivePartial;
