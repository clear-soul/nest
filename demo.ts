// 定义父接口
interface Animal {
  name: string;
  age: number;
  speak(): void;
}

// 使用 extends 关键字，让 Dog 接口继承 Animal 接口
interface Dog extends Animal {
  breed: string;
  bark(): void;
}

// 现在 Dog 接口包含了 Animal 接口中的属性和方法，以及新添加的属性和方法111

// 创建一个 Dog 对象
const myDog: Dog = {
  name: 'Rex',
  age: 5,
  breed: 'German Shepherd',
  speak: function () {
    console.log('Hello, my name is', this.name);
  },
  bark: function () {
    console.log('Woof!');
  },
};

// 使用 Dog 对象的方法
myDog.speak(); //Hello, my name is Rex
myDog.bark(); // Woof
