require "test_helper"

class ZinesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get zines_index_url
    assert_response :success
  end

  test "should get show" do
    get zines_show_url
    assert_response :success
  end
end
