import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TrendingBlinks from "./TrendingBlinks";


test(("check search bar is working correctly"),()=>{

    render(
       <BrowserRouter>
        <TrendingBlinks />
        </BrowserRouter>
    );
    const search = screen.getByRole("textbox");
    fireEvent.change(search,{target:{value:"work"}});
    expect(search.value).toBe('work');

});

test("Number of blinks should be 12",()=>{

    render(

        <BrowserRouter>
        <TrendingBlinks />
        </BrowserRouter>
    );

    const image=screen.getAllByRole('img');
    expect(image.length).toBe(12);

});

test("Trending blinks should be rendered",()=>{

    render(

        <BrowserRouter>
        <TrendingBlinks />
        </BrowserRouter>
    );

    const trending=screen.getByText('Trending Blinks');
    expect(trending).toBeInTheDocument();

});

test("Just Added should be rendered",()=>{

    render(

        <BrowserRouter>
        <TrendingBlinks />
        </BrowserRouter>
    );

    const justadded=screen.getByText('Just Added');
    expect(justadded).toBeInTheDocument();

});

test("Featured Audio blinks should be rendered",()=>{

    render(

        <BrowserRouter>
        <TrendingBlinks />
        </BrowserRouter>
    );

    const featured=screen.getByText('Featured Audio blinks');
    expect(featured).toBeInTheDocument();

});

test("on click Entrepreneurship, key ideas must be displayed",()=>{


    render(


        <BrowserRouter>
        <TrendingBlinks />
        </BrowserRouter>

    );
      
});

test("Filter check- false",()=>{

    render(
       
        <BrowserRouter>
        <TrendingBlinks />
        </BrowserRouter> 
    );

    const search=screen.getByRole("textbox");
    fireEvent.change(search,{target:{value:"lon"}});
    const book=screen.queryByText(/Bring your human to work/i);
    expect(book).not.toBeInTheDocument();

});
test("Filter check - true",()=>{

    render(
       
        <BrowserRouter>
        <TrendingBlinks />
        </BrowserRouter> 
    );

    const search=screen.getByRole("textbox");
    fireEvent.change(search,{target:{value:"lon"}});
    const book=screen.queryByText(/The Lonely Century/i);
    expect(book).toBeInTheDocument();

});