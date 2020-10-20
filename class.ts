class A {
    x: number
    constructor(x: number) {
        this.x = x
    }
    foo(){
        console.log("foo")
    }
    bar(){
        console.log("bar")
        this.foo()
    }
}


new A(1)
