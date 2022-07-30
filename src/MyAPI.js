import { useEffect, useState } from 'react'

export default function MyAPI() {
    const [data, setdata] = useState([]);
    const [load,setload] = useState(false);

    useEffect(() => {

        fetch("https://course-api.com/react-tours-project")
            .then(y => y.json())
            .then(y => {
                setdata(y);
            })

    }, [load])

    const remove = (id) => {
        setdata(data.filter((x) => {
            if (x.id != id) {
                return true;
            }
        }))
    }

    const refresh = () => {
        setload(!load);
    }

    return (
        <div>
            {
                data.map((x) => {
                    return (
                        <div>
                            <img src={x.image}/>{x.price}{x.id}{x.name}{x.info}
                            <button onClick={() => { remove(x.id) }}>Remove</button>
                        </div>

                    )
                })
            }
            <button onClick={()=>{refresh()}}>Refresh</button>
        </div>
    )

}