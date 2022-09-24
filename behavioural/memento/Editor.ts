class Editor {
  private title: string;
  private content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;

    console.log("I am in Editor constructor");
  }

  public save(): Memento {
    return new EditorMemento(this.title, this.content)
  }

  public restore(memento: Memento): void {
    this.title = memento.getTitle();
    this.content = memento.getContent();

    console.log("Restored");
  }
}

interface Memento {
  getTitle(): string;
  getContent(): string;
  getDate(): string;
}

class EditorMemento implements Memento {
  private title: string;
  private content: string;
  private date: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  getTitle(): string {
    return this.title;
  }

  getContent(): string {
    return this.content;
  }

  getDate(): string {
    return this.date;
  }
}

class HistoryMementos {
  private mementos: Memento[] = [];
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public backup(): void {
    this.mementos.push(this.editor.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
        return;
    }
    const memento = this.mementos.pop();

    console.log(`Caretaker: Restoring state to: ${memento?.getTitle()}`);
    this.editor.restore(memento);
  }

  public showHistory(): void {
    for (const memento of this.mementos) {
      console.log(memento.getTitle())
    }
  }
}
