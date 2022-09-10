
export default function Variables() {

    const name = "ahmet akan"; 
    const age = 25;
    var reverse = true;

    return (
        <div>

            {/* My name is {name} and I'm {age} years old. */}
            {`My name is ${name} and I'm ${age} years old.`}

            {/* { reverse ? `${age} ${name}`
                        : `${name} {age}`
                        } */}

            { reverse ? name+""+age : age+""+name }
            
        </div>
    )
}