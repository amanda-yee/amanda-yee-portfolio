const Film = () => {
    return (
    <div>
        <div className="flex pt-8 g-8">
            <img src="/media/long-beach.jpg" alt="long beach in the summer" style={{ maxWidth: '30%', height: 'auto' }} />
            <img src="/media/mott-st.jpg" alt="mott st, chinatown" style={{ maxWidth: '30%', height: 'auto' }} />
            <img src="/media/moma.jpg" alt="museum of modern art" style={{ maxWidth: '30%', height: 'auto' }} />
            {/* <img src="/media/skyline.jpg" alt="skyline" style={{ maxWidth: '30%', height: 'auto' }} /> */}
        </div>
    </div>
    );
};

export default Film;
