const BannerText = ({unboldChar, boldChar}) => {
    return (
        
        <div className="font-light responsive-font p-0">
            <h3 className="text-left">
                {unboldChar} <p className="font-semibold">{boldChar}</p>
            </h3>
        </div>
    )
}
export default BannerText