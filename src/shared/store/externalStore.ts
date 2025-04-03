export default abstract class ExternalStore<Snapshot> {
  protected listeners = new Set<VoidFunction>();
  protected snapshot = {} as Snapshot;

  addListener = (listener: () => void) => {
    this.listeners.add(listener);
  };

  removeListener = (listener: () => void) => {
    this.listeners.delete(listener);
  };

  getSnapshot = (): Snapshot => {
    return this.snapshot;
  };

  publish = () => {
    this.listeners.forEach((listener) => listener());
  };
}
