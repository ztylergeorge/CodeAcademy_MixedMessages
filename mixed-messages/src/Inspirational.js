const tools = require('./script');

const message = tools.printMessage();

const Inspirational = () => {
    return (  
        <h2>{ message }</h2>
    );
}
 
export default Inspirational;