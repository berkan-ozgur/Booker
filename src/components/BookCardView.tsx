import { TabPanel, TabView } from "primereact"
import Card from "./Card"


const BookCardView = () => {
    return (
        <TabView>
            <TabPanel header="En Çok Satılanlar">
                <Card />
                <Card />
            </TabPanel>
            <TabPanel header="Yeni Eklenenler">
                <Card />
            </TabPanel>
            <TabPanel header="İndirimdekiler">
                <Card />
                <Card />
                <Card />
            </TabPanel>
        </TabView>
    )
}

export default BookCardView