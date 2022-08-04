import logo from '../logo.svg';
import '../App.css';
import { AiOutlinePlus } from "react-icons/ai"
import { MdDelete } from "react-icons/md"
import api from '../request';
import React from 'react';
import {getDataActions} from "../redux/actions"
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux"


function Dashboard() {
  const { getData, loading } = useSelector(state => state?.dashboard)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!loading && !getData?.data) {
        dispatch(getDataActions())
    }
  },[loading])



  async function onClickAddData() {
    try {
        const { data } = await api.dashboard.addData({
          "title": "New Activity",
          "email": "ivan@skyshi.com"
        })
        dispatch(getDataActions())
    } catch (error) {
        
    }
  }

  async function onDeleteData(items) {
    try {
        const { data } = await api.dashboard.deleteData(items.id)
        dispatch(getDataActions())
    } catch (error) {
        
    }
  }

  return (
    <> 
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 40, fontWeight: 'bold'}}>Activity</span>
            <button onClick={onClickAddData} style={{ backgroundColor: '#16abf8', padding: '5px 40px', borderRadius: 30, border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                <AiOutlinePlus color='#fff' size={20}/>
                <span style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 10}}>Tambah</span>
            </button>
        </div>
        <div style={{ height: 60 }}/>
        <div style={{ display: 'flex', flexWrap: 'wrap', }}>
            {
                getData?.data?.map((items, index) => (
                    <div key={index} style={{
                        height: 250,
                        width: 250,
                        margin: 10,
                        borderRadius: 10,
                        boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.2)',
                    }}>
                        <div style={{ margin: 10, height: '90%', justifyContent: 'space-between', display: 'flex', flexDirection: 'column'}}>
                            <span style={{ fontWeight: 'bold',  flex: 1}}>
                                {items.title}
                            </span>
                            <div style={{ display: 'flex', color: '#a9acb0', justifyContent: 'space-between' }}>
                                <span>{moment(items.created_at).format('DD MM YYYY')}</span>
                                <span onClick={() => onDeleteData(items)} style={{ cursor: 'pointer' }}>
                                    <MdDelete size={20}/>
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div style={{ height: 60 }}/>
    </>
  );
}

export default Dashboard;
