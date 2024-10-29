import { fireEvent, screen } from "@testing-library/react"
import SideBar from "./SideBar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";


describe('SideBar', () => {
    test('with only first param', () => {
        renderWithTranslation(<SideBar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    })

    test('checking the collapsing of sidebar ', () => {
        renderWithTranslation(<SideBar/>);
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        // навесили на кнопку окрытия/закрытия сайдбара testId
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // нашли
        fireEvent.click(toggleBtn);
        // вызвали событие click 
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        // тестируем на появление класса закрытия  сайдбара 'collapsed'

    })
})