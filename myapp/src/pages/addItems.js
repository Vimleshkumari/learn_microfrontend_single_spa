export default function AddMenu(params) {



    let items = [{
        id: 1,
        name: "Pizza",
        cost: 100,
        isGood: true
    },
    {
        id: 2,
        name: "Sandwich",
        cost: 60,
        isGood: true
    },
    {
        id: 3,
        name: "Burger",
        cost: 40,
        isGood: true
    },
    {
        id: 4,
        name: "Pulao",
        cost: 80,
        isGood: true
    }]

    const addItem = (e) => {
        alert("Item is added")
    }
    const removeItem = (e) => {
        alert("Item is removed")
    }

    return (
        <>
            <div className="main-menu-header">
                <div >Heyy your cart is hungary...</div>
                <div className="menu-card">
                    {items?.map((item, ind) => {
                        return <div className="menu-items" key={ind}>
                            <div style={{ width: "50px" }}>{item.name}</div>
                            <div style={{ width: "50px" }} >{item.cost}  </div>
                            <div style={{ border: "2px solid  green", padding: "1px 8px", marginLeft: "5px" }} onClick={() => { addItem() }}>+</div>
                            <div style={{ border: "2px solid red", padding: "1px 8px", marginLeft: "5px" }} onClick={() => { removeItem() }}>-</div>

                        </div>
                        // </div>
                    })}
                </div>
            </div>

        </>
    )

}