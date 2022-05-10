import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const DailyReport = () => {
    const [data] = useChart();
    return (
        <>
            <Container className='mt-5 rounded-3'>
                <h1 className='text-center fw-bold display-4 mb-5'>Weekly Reports of the Warehouse</h1>
                <Row>
                    <Col className='mt-4' lg={6}>
                        <ResponsiveContainer width="100%" aspect={1.4}>
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="stock" fill="#446A46" />
                                <Bar dataKey="shipped" fill="#F66B0E" />
                                <Bar dataKey="request" fill="#363062" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col className='my-auto' lg={6}>
                        <Table responsive striped bordered hover variant="danger">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Stock</th>
                                    <th>Shipped</th>
                                    <th>Stock Request</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Saturday</td>
                                    <td>100000</td>
                                    <td>50000</td>
                                    <td>95000</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>200000</td>
                                    <td>150000</td>
                                    <td>190000</td>
                                </tr>
                                <tr>
                                    <td>Monday</td>
                                    <td>500000</td>
                                    <td>300000</td>
                                    <td>450000</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>500000</td>
                                    <td>480000</td>
                                    <td>470000</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>600000</td>
                                    <td>550000</td>
                                    <td>500000</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>700000</td>
                                    <td>700000</td>
                                    <td>800000</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>1200000</td>
                                    <td>1190000</td>
                                    <td>400000</td>
                                </tr>

                            </tbody>
                        </Table>
                        <p> NB: This report generated by system on every Saturday after lunch. We can provide daily reports only on requirements of the authority.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DailyReport;