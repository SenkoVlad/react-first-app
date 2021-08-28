import ReactDOM from 'react-dom';
import MainAppComponent from './App';

test('renders learn react link', () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainAppComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});