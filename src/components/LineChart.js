
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Component } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

class LineChart extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      data: {
        labels: props.chartLables,
        datasets: [
          {
            label: 'Scores',
            data: props.chartValues,
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
          }
        ]
      }
    }
  }

  render() {
    return (
          <Line
          id={this.props.data}
            data={this.state.data}
            options= {{
                type: 'line',
                data: this.state.data,
                options: {
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Chart.js Line Chart'
                    }
                  }
                }
            }
            }
          />
          
      );
  }
};

export default LineChart;