const workoutController = require('./workoutController')
const getWorkout = workoutController.getWorkout;
const getAllWorkouts = workoutController.getAllWorkouts;

//test('Dette er min første test', () => {
  //  expect(getWorkout()).toBe("")
//})



describe('61834610', () => {

  
  it('test is failing', async () => {
    const mReq = { params: {} };
    const mRes = {};
    //const mNext = jest.fn();
    await getAllWorkouts(mReq, mRes);
    expect(mRes).toBeCalledWith(new Error('invalid.'));
  });

  it('should throw 400 error if id is empty string', async () => {
    const mReq = { params: { id: '' } };
    const mRes = {};
    //const mNext = jest.fn();
    await getWorkout(mReq, mRes);
    //expect(mRes).toBeCalledWith(new Error('invalid.'));
  });
})

/*



  it('should throw 400 error if id is invalid format', async () => {
    const mReq = { params: { id: '$$' } };
    const mRes = {};
    const mNext = jest.fn();
    await retrieveMember(mReq, mRes, mNext);
    expect(mNext).toBeCalledWith(new Error('invalid format.'));
  });



  it('should retrieve one member by id and send response correctly', async () => {
    const mMemberRecord = { id: '1', username: 'KF1' };
    jest.spyOn(MemberService, 'retrieveOneMember').mockResolvedValueOnce(mMemberRecord);
    const mReq = { params: { id: '1' } };
    const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const mNext = jest.fn();
    await retrieveMember(mReq, mRes, mNext);
    expect(MemberService.retrieveOneMember).toBeCalledWith('1');
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.send).toBeCalledWith({ member_detail: { id: '1', username: 'KF1' } });
  });
});


//Kilde: https://you.com/search?q=how%20to%20test%20a%20controller%20function%20with%20jest
*/