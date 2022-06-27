class Foo {
    public int i;

    public Foo() {
        this.i = 1;
    }

    public synchronized void first(Runnable printFirst) throws InterruptedException {
        printFirst.run();
        this.i++;
        notifyAll();
    }

    public synchronized void second(Runnable printSecond) throws InterruptedException {
        while (this.i != 2) {
            wait();
        }
        printSecond.run();
        this.i++;
        notifyAll();
    }

    public synchronized void third(Runnable printThird) throws InterruptedException {
        while (this.i != 3) {
            wait();
        }
        printThird.run();
    }
}
