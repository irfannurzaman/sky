import React from "react";


export default function Layout({children}) {
    return (
        <>
            <div style={{
                width: '100%',
                height: 100,
                backgroundColor: '#16abf8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{ width: '70%' }}>
                    <span style={{ fontSize: 30, fontWeight: 'bold', color: '#fff'}}>TO DO LIST APP</span>
                </div>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 30
            }}>
                <div style={{ width: '60%' }}>
                    {children}
                </div>
            </div>
        </>
    )
}