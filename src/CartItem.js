import React from 'react';

class CartItem extends React.Component {
  //   testing() {
  //     const promise = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve('done');
  //       }, 5000);
  //     });

  //     promise.then(() => {
  //       // setState acts like a synchronous call in promise and ajax and hence batching didn't occur here
  //       this.setState({ qty: this.state.qty + 10 });

  //       console.log('state', this.state);
  //     });
  //   }
  increaseQuantity = () => {
    //   setState form 1[object form used when prevState is not req.]
    // this.setState({
    //   qty: this.state.qty + 1,
    // }, () = {});
    // setState acts like an asynchronous call in Event Handlers so batching will be performed here

    // setState form 2[function form used when prevState is req]
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    this.setState((prevState) => {
      if (prevState.qty > 0) {
        return {
          qty: prevState.qty - 1,
        };
      }
    });
  };

  render() {
    console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: '#777' }}>Rs. {price} </div>
          <div style={{ color: '#777' }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992683.svg"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};

export default CartItem;
