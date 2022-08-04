import baseRequest from "../utils/request";
export default class Dashboard extends baseRequest{
    constructor() {
        super();
        this.urls = {
            getData: 'activity-groups?email=ivan@skyshi.com',
            addData: 'activity-groups'
        };
    }
    getData = () =>  this.get(this.urls.getData)
    addData = (params) =>  this.post(this.urls.addData, params)
    deleteData = (params) =>  this.delete(this.urls.addData + '/' + params)

}
