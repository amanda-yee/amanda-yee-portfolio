const Film = () => {
    return (
    <div>
        <div className="film-pics">
            <img src="/media/long-beach.jpg" alt="long beach in the summer" style={{ maxWidth: '45%', height: 'auto' }} />
            <img src="/media/mott-st.jpg" alt="mott st, chinatown" style={{ maxWidth: '45%', height: 'auto' }} />
        </div>

         <div className="film-pics">
            <img src="/media/moma.jpg" alt="museum of modern art" style={{ maxWidth: '45%', height: 'auto' }} />
            <img src="/media/skyline.jpg" alt="skyline from williamsburg" style={{ maxWidth: '45%', height: 'auto' }} />
        </div>
    </div>
    );
};

export default Film;
