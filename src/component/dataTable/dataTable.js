import React from 'react'
import { Avatar, Checkbox, Dropdown, Table } from 'rsuite';
import './dataTable.css';
import CregitalPics from '../../img/cregital_pics.svg';
import InteliaPics from '../../img/intelia.svg';
import Optisoft from '../../img/optisoft.svg';
import Imperialsoft from '../../img/imperialsoft.svg';
import Altechma from '../../img/altechma.svg';
import Talosmart from '../../img/talosmart.svg';
import Atlassian from '../../img/atlassian.svg';
import Weevil from '../../img/weevil.svg';
import CloudNet from '../../img/cloud_net.svg';
import Enyata from '../../img/enyata.svg';

const { Column, HeaderCell, Cell } = Table;

const data = [{
    companyPics: CregitalPics,
    companyName: 'Cregital',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Approved'
},
{
    companyPics: InteliaPics,
    companyName: 'Intelia',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Approved'
}, {
    companyPics: Optisoft,
    companyName: 'Optisoft',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Approved'
}, {
    companyPics: Imperialsoft,
    companyName: 'Imperialsoft',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Declined'
}, {
    companyPics: Altechma,
    companyName: 'Altechma',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Pending'
}, {
    companyPics: Talosmart,
    companyName: 'Talosmart',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Declined'
}, {
    companyPics: Atlassian,
    companyName: 'Atlassian',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Declined'
}, {
    companyPics: Weevil,
    companyName: 'Weevil Company',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Approved'
}, {
    companyPics: CloudNet,
    companyName: 'CloudNetIQ Labs',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Approved'
}, {
    companyPics: Enyata,
    companyName: 'Enyata',
    companySize: '102',
    yrsOfInc: '3',
    revenue: 'NGN 1,000,000',
    status: 'Approved'
}]

function DataTable() {
    return (
        <div className="data_table_container">
            <div className="table_widjet">
                <div className="table_filter">
                    <div>All</div>
                    <div className="approved_filter">Approved</div>
                    <div className="pending_filter">Pending</div>
                    <div className="declined_filter">Declined</div>
                </div>

                <div>
                    <Dropdown className="sort_dropdown" title="Sort">
                        <Dropdown.Item>Approved</Dropdown.Item>
                        <Dropdown.Item>Pending</Dropdown.Item>
                        <Dropdown.Item>Declined</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>

            <Table
                autoHeight={true}
                data={data}
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Column width={40}>
                    <HeaderCell className="datatable_header_checkbox_container">
                        <Checkbox></Checkbox>
                    </HeaderCell>

                    <Cell className="datatable_checkbox_container">
                        <Checkbox></Checkbox>
                    </Cell>
                </Column>

                <Column width={180}>
                    <HeaderCell>Company Name</HeaderCell>
                    <Cell className="company_name_table_cell">
                        {rowData => {
                            return (
                                <>
                                    <Avatar size="sm" src={rowData.companyPics} />
                                    <span className="company_name_span">{rowData.companyName}</span>
                                </>
                            )
                        }}
                    </Cell>
                </Column>

                <Column width={100}>
                    <HeaderCell>Company Size</HeaderCell>
                    <Cell className="table_cell" dataKey="companySize" />
                </Column>

                <Column width={90}>
                    <HeaderCell>Yrs of inc.</HeaderCell>
                    <Cell className="table_cell" dataKey="yrsOfInc" />
                </Column>
                <Column width={140}>
                    <HeaderCell>Revenue</HeaderCell>
                    <Cell className="table_cell" dataKey="revenue" />
                </Column>

                <Column width={90}>
                    <HeaderCell></HeaderCell>

                    <Cell className="table_cell">
                        {rowData => {
                            return (
                                <div>
                                    {rowData.status === 'Approved'
                                        ? <div className="approved_status">
                                            {rowData.status}
                                        </div>
                                        : rowData.status === 'Pending'
                                            ? <div className="pending_status">
                                                {rowData.status}
                                            </div>
                                            : <div className="declined_status">
                                                {rowData.status}
                                            </div>
                                    }
                                </div>
                            );
                        }}
                    </Cell>
                </Column>
            </Table>
                <div className="table_pagination">
                    <span className="prev">
                        <svg width="5" height="7" viewBox="0 0 5 7" fill="none" style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.1202 6.93006L4.47085 6.57938C4.51768 6.53265 4.54102 6.47883 4.54102 6.41797C4.54102 6.35726 4.51768 6.30346 4.47085 6.25673L1.7143 3.50004L4.47078 0.743462C4.5176 0.69671 4.54094 0.642908 4.54094 0.582128C4.54094 0.521323 4.5176 0.46752 4.47078 0.420793L4.1201 0.0701648C4.07337 0.0233391 4.01957 -2.27931e-08 3.95877 -2.5451e-08C3.89801 -2.81067e-08 3.84421 0.0234128 3.79748 0.0701648L0.528869 3.3387C0.482117 3.38543 0.458753 3.43926 0.458753 3.50004C0.458753 3.56082 0.482117 3.61455 0.528869 3.66125L3.79748 6.93006C3.84423 6.97678 3.89803 7 3.95877 7C4.01957 7 4.07337 6.97678 4.1202 6.93006Z" fill="#C4CDD5" />
                        </svg>
                    </span>
                    <span className="current_num">1</span>
                    <span className="pagination_count">2</span>
                    <span className="pagination_count">3</span>
                    <span>...</span>
                    <span className="pagination_count">100</span>

                    <span>
                        <svg  width="5" height="7" viewBox="0 0 5 7" fill="none" style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.879801 0.0699429L0.529149 0.420619C0.482323 0.467347 0.458984 0.521175 0.458984 0.582028C0.458984 0.642735 0.482323 0.696538 0.529149 0.743265L3.2857 3.49996L0.529223 6.25654C0.482397 6.30329 0.459058 6.35709 0.459058 6.41787C0.459058 6.47868 0.482397 6.53248 0.529223 6.57921L0.8799 6.92984C0.926627 6.97666 0.98043 7 1.04123 7C1.10199 7 1.15579 6.97659 1.20252 6.92984L4.47113 3.6613C4.51788 3.61457 4.54125 3.56074 4.54125 3.49996C4.54125 3.43918 4.51788 3.38545 4.47113 3.33875L1.20252 0.0699429C1.15577 0.0232157 1.10197 -2.81056e-08 1.04123 -2.5451e-08C0.98043 -2.27931e-08 0.926627 0.0232158 0.879801 0.0699429Z" fill="#006FBB" />
                        </svg>

                    </span>
                </div>
        </div>
    )
}

export default DataTable;
