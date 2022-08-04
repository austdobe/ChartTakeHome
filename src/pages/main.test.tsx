import { shallow } from 'enzyme';
import  MainPage  from './main';

describe('App', () => {
  let wrapper:any = ''; 

    beforeEach(() => {
      wrapper = shallow(<MainPage />);
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
    });
})