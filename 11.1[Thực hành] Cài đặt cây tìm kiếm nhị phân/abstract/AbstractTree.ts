import {Tree} from "../interface/Tree";

export abstract class AbstractTree implements Tree {
    getSize(): number {
        return 0;
    }

    inorder(): void {
    }

    insert(e): boolean {
        return false;
    }
}