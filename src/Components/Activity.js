import React from 'react'

export default function Activity() {
    return (
        <div className="w-screen sm:w-auto p-4" id="activity"  >
            <h4 className="text-2xl my-6" >Activity</h4>
            <div className="shadow-md  overflow-scroll bg-white border-2 rounded-md border-blue-400" >
                <table cellPadding={10} className=" text-black text-left rounded-lg overflow-hidden  w-full" >
                    <thead className="border-b-2 border-blue-600">
                        <tr >
                            <th >Transactions</th>
                            <th >Amount</th>
                            <th >Tools</th>
                            <th >Status</th>
                            <th >Date</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bitcoin Purchased</td>
                            <td>0.3 Btc</td>
                            <td>USD 100</td>
                            <td>Pending</td>
                            <td>12/09/21</td>
                        </tr>
                        <tr>
                            <td>Bitcoin Purchased</td>
                            <td>0.3 Btc</td>
                            <td>USD 100</td>
                            <td>Pending</td>
                            <td>12/09/21</td>
                        </tr>
                        <tr>
                            <td>Bitcoin Purchased</td>
                            <td>0.3 Btc</td>
                            <td>USD 100</td>
                            <td>Pending</td>
                            <td>12/09/21</td>
                        </tr>
                        <tr>
                            <td>Bitcoin Purchased</td>
                            <td>0.3 Btc</td>
                            <td>USD 100</td>
                            <td>Pending</td>
                            <td>12/09/21</td>
                        </tr>
                        <tr>
                            <td>Bitcoin Purchased</td>
                            <td>0.3 Btc</td>
                            <td>USD 100</td>
                            <td>Pending</td>
                            <td>12/09/21</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
