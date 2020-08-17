module Main exposing (..)
import Browser exposing (Document)
import Html exposing (Html, button, div, text, h1)
import Html.Events exposing (onClick)
import Html.Attributes exposing (id, style)
import Html.Attributes exposing (title)

-- MAIN
main : Program () Model Msg
main =
  Browser.document 
    { init = init
    , subscriptions = subscriptions
    , update = update
    , view = view
    }

-- MODEL
type alias Model = Int

init : () -> ( Model, Cmd Msg )
init _ =
  ( 1, Cmd.none )

-- UPDATE
type Msg = Increment | Decrement

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    Increment ->
      ( model + 1
      , Cmd.none
      )
    Decrement ->
      ( model - 1
      , Cmd.none
      )

-- SUBSCRIPTIONS
subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none

-- VIEW
view : Model -> Document Msg
view model =
  { title = "Echarts Creator"
  , body = 
    [ Html.h1 [] [ text "Hello Echarts and Elm!" ]
    , button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "+" ]
    , div [ id "echarts"
          , style "width" "600px"
          , style "height" "400px"
          ] []
    ]
  }
    