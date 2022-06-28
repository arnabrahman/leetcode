class FizzBuzz {
    private int n;
    private int currentNumber;

    public FizzBuzz(int n) {
        this.n = n;
        this.currentNumber = 1;
    }

    // fizz" if i is divisible by 3 and not 5,
    // printFizz.run() outputs "fizz".
    public synchronized void fizz(Runnable printFizz) throws InterruptedException {
        while (this.currentNumber <= n) {
            if (this.currentNumber % 3 == 0 && this.currentNumber % 5 != 0) {
                printFizz.run();
                this.currentNumber++;
                notifyAll();
            } else {
                wait();
            }

        }
    }

    // "buzz" if i is divisible by 5 and not 3
    // printBuzz.run() outputs "buzz".
    public synchronized void buzz(Runnable printBuzz) throws InterruptedException {
        while (this.currentNumber <= n) {
            if (this.currentNumber % 3 != 0 && this.currentNumber % 5 == 0) {
                printBuzz.run();
                this.currentNumber++;
                notifyAll();
            } else {
                wait();
            }

        }
    }

    // "fizzbuzz" if i is divisible by 3 and 5
    // printFizzBuzz.run() outputs "fizzbuzz".
    public synchronized void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        while (this.currentNumber <= n) {
            if (this.currentNumber % 3 == 0 && this.currentNumber % 5 == 0) {
                this.currentNumber++;
                printFizzBuzz.run();
                notifyAll();
            } else {
                wait();
            }
        }
    }

    // i if i is not divisible by 3 or 5
    // printNumber.accept(x) outputs "x", where x is an integer.
    public synchronized void number(IntConsumer printNumber) throws InterruptedException {
        while (this.currentNumber <= n) {
            if (this.currentNumber % 3 != 0 && this.currentNumber % 5 != 0) {
                printNumber.accept(this.currentNumber);
                this.currentNumber++;
                notifyAll();
            } else {
                wait();
            }

        }
    }
}