import { API, Auth, graphqlOperation } from 'aws-amplify';


export const getCommonChatRoomWithUser = async (userId) => {
  try {
    const authUser = await Auth.currentAuthenticatedUser();
    const response = await API.graphql(
      graphqlOperation(listChatRooms, { id: authUser.attributes.sub })
    );
    const chatRooms = response.data.getUser?.ChatRooms?.items || [];

    console.log(chatRooms[0]?.chatRoom?.users?.items[0]?.user?.id);

    const chatRoom = chatRooms.find((chatRoomItem) => {
      return chatRoomItem.chatRoom?.users?.items?.some(
        (userItem) => userItem.user.id === userId
      );
    });

      return chatRoom;
  } catch (error) {
    console.error("Failed to get chat room with user", error);
  }
};
 
    
    
    //  get all chatrroms of user 2
    
    
    // remove chat rooms with more than 2 userSelect:

    
    // get the common chat rooms

export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      ChatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id 
                }
              }
            }
          }
        }
      }
    }
  }
`;
