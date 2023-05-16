/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const {width} = Dimensions.get('window');

export const CreatePlanChartReview = () => {
  //   const datas = [{x: new Date(), y: '$2000'}];
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'May'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={width}
      height={300}
      style={{marginTop: 20, marginRight: 30}}
      chartConfig={{
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
    />
  );
};
