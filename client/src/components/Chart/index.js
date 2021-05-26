import React,{Component} from "react";
import { Doughnut, Bar, Pie, Line } from 'react-chartjs-2';
import css from "./style.css";

class Chart extends Component {
    constructor(props){
        super(props);
        console.log(this.props, "from Charts")
        const coinTitle = this.props.coins.map(coin => coin.title)
        const coinAmount = this.props.coins.map(coin => coin.author)
        this.state = {
            chartData:{
                labels: coinTitle,
                datasets:[
                  {
                    label:'Investing',
                    data: coinAmount,
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(255, 99, 132, 0.6)'
                    ]
                  }
                ]
            }
        }
    }


render() {
    return (
        <div className="chart">
        <Bar
    data={this.state.chartData}
    width={100}
	height={50}
	options={{ maintainAspectRatio: false }}
     />

        </div>
    )
}
  
}

export default Chart;





