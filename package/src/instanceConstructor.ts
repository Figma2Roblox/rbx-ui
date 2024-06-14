import { CreatableInstances } from "./generated/instanceInterfaces";
import { instanceConstructors } from "./generated/instanceClasses";

export const Instance = {
    new<T extends keyof CreatableInstances>(className: T): CreatableInstances[T] {
        return new instanceConstructors[className]()
    }
}