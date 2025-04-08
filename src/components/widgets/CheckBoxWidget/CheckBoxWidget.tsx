import s from './CheckBoxWidget.module.scss'

interface CheckBoxWidgetProps {
    enabled: boolean,
    refresh: boolean,
    handleEnabled: (enabled: boolean) => void,
    handleRefresh: (refresh: boolean) => void,
}

const CheckBoxWidget = ({ enabled, refresh, handleEnabled, handleRefresh }: CheckBoxWidgetProps) => {
    return (
        <div >
            <form className={s.checkbox_container}>
                <label className={s.label_item}>
                    <input type="checkbox" onChange={() => handleEnabled(enabled)} checked={enabled} />
                     Enable
                </label>
                <label className={s.label_item}>
                    <input type="checkbox" onChange={() => handleRefresh(refresh)} checked={refresh} />
                     Auto-refresh every 5 sec
                </label>
            </form>
        </div>
    )

}

export default CheckBoxWidget