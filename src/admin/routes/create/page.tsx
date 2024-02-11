import { RouteConfig } from "@medusajs/admin"
import { Table, FocusModal, Button, ProgressTabs, Input, Label, Heading  } from "@medusajs/ui"
import { useState, useEffect } from "react";
import Medusa from "@medusajs/medusa-js"


const CustomPage = () => {

    const [titleState, setTitleState] = useState('');

    function handleTitleChange(e) {
        setTitleState(e.target.value);
    }

    const [descriptionState, setDescriptionState] = useState('');

    function handleDescriptionChange(e) {
        setDescriptionState(e.target.value);
    }

    const [singerState, setSingerState] = useState('');

    function handleSingerChange(e) {
        setSingerState(e.target.value);
    }

    const [albumState, setAlbumState] = useState('');

    function handleAlbumChange(e) {
        setAlbumState(e.target.value);
    }

    const [brandState, setBrandState] = useState('');

    function handleBrandChange(e) {
        setBrandState(e.target.value);
    }

    const [labelState, setLabelState] = useState('');

    function handleLabelChange(e) {
        setLabelState(e.target.value);
    }

    const [genreState, setGenreState] = useState('');

    function handleGenreChange(e) {
        setGenreState(e.target.value);
    }

    function onCreateProduct(e) {
        e.preventDefault();
        // console.log(e);
        console.log(titleState, descriptionState, singerState, albumState, brandState, labelState);

        medusa.admin.products.create({
            title: titleState,
            album: albumState,
            label: labelState,
            genre: genreState,
            is_giftcard: false,
            discountable: false,
            status: 'published',
        }).then(({ product }) => {
            console.log(product.id, 'product created');
        });
    }

    const medusa = new Medusa({
        baseUrl: "http://localhost:9000", maxRetries: 3, apiKey: 'pk_01HMVC159BQPJ10BPBCZYCF8GX',
    })
    const [productsState, setProductsState] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                medusa.admin.products.list()
                    .then(({products, limit, offset, count}) => {
                        setProductsState (products);
                        // console.log(products);
                    });
            } catch(err) {
                // error handling code
            }
        }

        // call the async fetchData function
        fetchData();
    }, [])

    let data = null;
    if (productsState) {
        data = productsState.map((product, index) =>(<Table.Row  key={product.id}>
            <Table.Cell> { product.title }</Table.Cell>
            <Table.Cell> { product.description } </Table.Cell>
            <Table.Cell> { product.singer } </Table.Cell>
            <Table.Cell> { product.album } </Table.Cell>
            <Table.Cell> { product.brand } </Table.Cell>
            <Table.Cell> { product.label } </Table.Cell>
            <Table.Cell> { product.genre } </Table.Cell>
        </Table.Row>));
    }

    return (

        <ProgressTabs defaultValue="table">
            <ProgressTabs.List>
                <ProgressTabs.Trigger value="table">
                    Список продуктов
                </ProgressTabs.Trigger>
                <ProgressTabs.Trigger value="create">
                    Создать продукт
                </ProgressTabs.Trigger>
            </ProgressTabs.List>
            <ProgressTabs.Content value="table">
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Singer</Table.HeaderCell>
                            <Table.HeaderCell>Album</Table.HeaderCell>
                            <Table.HeaderCell>Brand</Table.HeaderCell>
                            <Table.HeaderCell>Label</Table.HeaderCell>
                            <Table.HeaderCell>Genre</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { data }
                    </Table.Body>
                </Table>
            </ProgressTabs.Content>
            <ProgressTabs.Content value="create">
                <form onSubmit={ onCreateProduct }>
                    <Heading level="h1">Создать продукт</Heading>
                    <div className="flex gap-24 flex-wrap">
                        <Label className="grow">
                            Title
                            <Input value={titleState} onInput={handleTitleChange} placeholder="Placeholder" id="input-id" />
                        </Label>

                        <Label className="grow">
                            Description
                            <Input value={descriptionState} onInput={handleDescriptionChange} placeholder="Placeholder" id="input-id" />
                        </Label>

                        <Label className="grow">
                            singer
                            <Input value={singerState} onInput={handleSingerChange} placeholder="Placeholder" id="input-id" />
                        </Label>

                        <Label className="grow">
                            Album
                            <Input value={albumState} onInput={handleAlbumChange} placeholder="Placeholder" id="input-id" />
                        </Label>

                        <Label className="grow">
                            Brand
                            <Input value={brandState} onInput={handleBrandChange} placeholder="Placeholder" id="input-id" />
                        </Label>

                        <Label className="grow">
                            Label
                            <Input value={labelState} onInput={handleLabelChange} placeholder="Placeholder" id="input-id" />
                        </Label>

                        <Label className="grow">
                            Genre
                            <Input value={genreState} onInput={handleGenreChange} placeholder="Placeholder" id="input-id" />
                        </Label>

                        <Button type="submit"> Создать продукт </Button>
                    </div>
                </form>
            </ProgressTabs.Content>
        </ProgressTabs>
    )
}

export const config: RouteConfig = {
    link: {
        label: "Create entity",
    },
}

export default CustomPage