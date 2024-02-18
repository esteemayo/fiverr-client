import './Messages.scss';

const Messages = () => {
  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium et nulla temporibus saepe sint eos tempore fuga labore, porro est nostrum harum, animi sed, voluptatem placeat adipisci corrupti dignissimos.`;

  return (
    <main className='messages'>
      <div className='container'>
        <div className='title'>
          <h1>Messages</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Buyer</th>
              <th>Last message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>{message}</td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>Mary Doe</td>
              <td>{message}</td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>Alice Doe</td>
              <td>{message}</td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>Christian Vega</td>
              <td>{message}</td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>Lourdes Browning</td>
              <td>{message}</td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>Katie Powell</td>
              <td>{message}</td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>Harry Rodriques</td>
              <td>{message}</td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Messages;
