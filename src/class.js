class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  play() {
    console.log("跑")
  }
}

// 创建一个类 - 使用extends关键字实现 子类继承父类
class Animal extends Person {
  // 构造器
  constructor(name, age, id) {
    super(name, age)
    this.id = id
  }

  // 静态属性
  static info = "aaa"

  // 实例方法
  // play() {
  //   console.log("跑")
  // }

  // 静态方法
  static show() {
    console.log("展示")
  }
}

const a1 = new Animal('大黄', 3, 100) // 实例属性
console.log(a1)
a1.play()

// 静态属性 通过 构造函数，直接访问到的属性，叫做静态属性
// console.log(Animal.info)
// Animal.show()

class American {
  constructor(name, age) {
    this.name = name 
    this.age = age
  }
}

const b1 = new American('Jack', 5)
console.log(b1)
