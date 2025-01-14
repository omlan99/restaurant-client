import Card from "../../Component/Card";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-5 px-4 mb-8">
        {
                    items.map(item => <Card key={item._id} item={item}></Card>)
                }
        </div>
    );
};

export default OrderTab;