import CheckBoxWidget from '@/components/widgets/CheckBoxWidget/CheckBoxWidget';
import ImageComponent from '@/components/elements/ImageComponent/ImageComponent';

import useFetchCat from '@/components/hooks/useFetchCat/useFetchCat';

import { Button } from '@chakra-ui/react';

import s from './GetCatLayout.module.scss'

import { useState } from "react";

interface HandleClickButtonProps {
    enabled: boolean
}

const GetCatLayout = () => {
    const [enabled, setEnabled] = useState<boolean>(true)
    const [refresh, setRefresh] = useState<boolean>(false)
    const [warnMessage, setWarnMessage] = useState<boolean>(false)
    const {cat, fetchCat} = useFetchCat(refresh, enabled)

    const handleCheckEnabled = ({ enabled }: HandleClickButtonProps) => {
        if (enabled) {
            fetchCat()
        }
        else setWarnMessage(true)
    }

    const handleEnabled = () => {
        setEnabled((prevEnable) => !prevEnable)
        setWarnMessage(!warnMessage)
    }

    const handleRefresh = () => {
        const newRefreshValue = (!refresh)
        setRefresh(newRefreshValue)
    }

    return (
        <div className={s.get_cat_container}>
            <CheckBoxWidget enabled={enabled} refresh={refresh} handleEnabled={handleEnabled} handleRefresh={handleRefresh} />
            <Button colorPalette="blue" onClick={() => { handleCheckEnabled({ enabled }) }}>Get Cat</Button>
            <div className={warnMessage ? s.warn_message_shown : s.warn_message_hided}>You should click "Enable" to Get New Cat</div>
            <ImageComponent source={cat && cat.length > 0 ? cat[0].url : null} description={'Изображение кошки'} className={s.cat_image} />
        </div>
    )
}

export default GetCatLayout