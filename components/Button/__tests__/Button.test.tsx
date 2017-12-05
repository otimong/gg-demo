import React from 'react'
import { shallow, configure } from 'enzyme'

import { Button } from '../Button'

describe("Button", () => {
    it("Should render correctly", () => {
        let wrapper = shallow(<Button />)
        expect(wrapper).toMatchSnapshot()
    })

    it("Should render an icon", () => {
        let wrapper = shallow(<Button icon="twitter" />)
        expect(wrapper).toMatchSnapshot()
    })
})