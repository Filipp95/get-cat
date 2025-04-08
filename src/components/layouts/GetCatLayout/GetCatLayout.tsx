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
    const [imageStatus, setImageStatus] = useState<boolean>(false)

    const { cat, isLoading, fetchCat } = useFetchCat(refresh, enabled)

    const handleCheckEnabled = ({ enabled }: HandleClickButtonProps) => {
        if (enabled) {
            setImageStatus(false)
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
            <Button colorPalette="blue" disabled={refresh} loading={isLoading} loadingText="Load Cat..." onClick={() => { handleCheckEnabled({ enabled })}}>
                Get Cat
            </Button>
            <div className={warnMessage ? s.warn_message_shown : s.warn_message_hided}>You should click "Enable" to Get New Cat</div>
            <ImageComponent imageStatus={imageStatus} onLoad={()=>setImageStatus(true)} source={cat && cat.length > 0 ? cat[0].url : null}
             description={'Незагруженное изображение кошки'}  className={s.cat_image}/>
        </div>
    )
}

export default GetCatLayout