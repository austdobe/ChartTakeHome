import { shallow } from 'enzyme';
import  MainPage  from './main';

describe('App', () => {
  let wrapper:any = ''; 
  let appInstance: any =''

    beforeEach(() => {
      wrapper = shallow(<MainPage />);
      appInstance = wrapper.instance()
    });
    afterEach(() => {
      wrapper = undefined;
      appInstance = undefined;
    });
    describe('using enzyme', () => {

      it("renders without crashing", ()=>{
        expect(wrapper.exists()).toBe(true)
      })

      it('returns the text', () => {
        expect(wrapper.find('[data-testid="greetings-container"]').text()).toContain(
          'Author Revision Head to Head'
        );
      });

      it("renders Author input", () => {
        expect(wrapper.find('[data-testid="firstAuth"]').length).toBe(1);
      });

      it('renders chart', () => {
        expect(wrapper.find('[data-testid="chart-container"]').exists()).toBe(true)
      })
    });

})