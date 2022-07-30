import { useEffect, useState } from 'react'

export default function MyAPI() {
    const [data, setdata] = useState([]);

    useEffect(() => {

        fetch("https://course-api.com/react-tours-project")
            .then(y => y.json())
            .then(y => {
                setdata(y);
            })

    }, [])

    const remove = (id) => {
        setdata(data.filter((x) => {
            if (x.id != id) {
                return true;
            }
        }))
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
        </div>
    )

}