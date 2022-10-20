import StatisticLine from './StatisticLine'

const Statistics = (props) => {

    if(props.good === 0 && props.neutral === 0 && props.bad ===0){
            return(
                    <h1 className='mt-4'>No statistics at the moment, feel free to give us a feed back</h1>
            ) 
    }
   return (  
        <>
         <table className='table table-sm'>
            <thead>
                <tr className='table-dark'>
                    <th scope='col'>Good</th>
                    <th scope='col'>Neutral</th>
                    <th scope='col'>Bad</th>
                    <th scope='col'>Total surveys</th>
                    <th scope='col'>average</th>
                    <th scope='col'>positive</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <th> <StatisticLine  value={props.good}/></th>
                        <th> <StatisticLine value={props.neutral}/></th>
                        <th>  <StatisticLine value={props.bad}/></th>
                        <th> <StatisticLine  value={props.good + props.neutral + props.bad}/></th>
                        <th>  <StatisticLine value={(props.good + props.neutral - props.bad - props.neutral)/(props.good + props.neutral + props.bad)}/></th>
                        <th> <StatisticLine  value={(props.good)/(props.good + props.neutral + props.bad) }/>%</th>

                    </tr>
            </tbody>
         </table>
           
           
          
            
        </>
    );
}
 
export default Statistics;