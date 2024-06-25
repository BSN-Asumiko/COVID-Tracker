/* eslint-disable react/prop-types */

import WidgetBody from "../widgets/WidgetBody";
import WidgetHead from "../widgets/WidgetHead";
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default class LinearGrafic extends PureComponent {
    render() {
        console.log('LinearGrafic ' + this.props.country.data)
        console.log(typeof this.props.country.data)
        return (
            <>
                <WidgetHead text="" />
                <WidgetBody>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={this.props.country.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                        </LineChart>
                    </ResponsiveContainer>
                </WidgetBody>
            </>
        );
    }
}