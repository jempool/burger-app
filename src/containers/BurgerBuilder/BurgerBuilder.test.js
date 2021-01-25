import React from "react";
import { configure, shallow } from "enzyme";
import adapter from "enzyme-adapter-react-16";

import { BurgerBuilder } from "./BurgerBuilder";
import buildControls from "../../components/Burger/BuildControls/BuildControls";

configure({ adapter: new adapter() });

describe("<BurgerBuilder />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it("should render <BuildControls /> when receiving ingredients", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(buildControls)).toHaveLength(1);
  });
});
