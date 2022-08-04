import { shallow } from 'enzyme';
import  MainPage  from './main';
import { getByText, render, fireEvent } from '@testing-library/react';

describe('App', () => {
    describe('using enzyme', () => {
      it('returns the text', () => {
        const component = shallow(<MainPage />);
        expect(component.find('[data-testid="greetings-container"]').text()).toContain(
          'Author Revision Head to Head'
        );
      });
    });
})