interface MyInterface {
  property1?: string;
  property2: number;
  property3?: boolean;
}

interface MyInterfaceTwo {
  property4: string;
}

interface MyInterfaceThree extends MyInterface, MyInterfaceTwo {
  property5: string;
}

async function myFunc(input: MyInterfaceThree): Promise<MyInterface> {
  return input;
}

const Interfaces = () => {
  return (
    <div>
      <code>{`
     
interface MyInterface {
  property1?: string;
  property2: number;
  property3?: boolean;
}
interface MyInterfaceTwo {
  property4: string;
}
interface MyInterfaceThree extends MyInterface, MyInterfaceTwo {
  property5: string;
}
async function myFunc(input: MyInterfaceThree): Promise<MyInterface> {
  return input
}`}</code>
    </div>
  );
};

export default Interfaces;
