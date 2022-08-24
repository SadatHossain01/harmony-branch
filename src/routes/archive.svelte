<script lang="ts">
  import type { Question } from "src/lib/data/question";

  //   import { useNavigate, useParams, Link } from "svelte-navigator";
  import { Router, Route, Link, useParams } from "svelte-navigator";
  import type { QuestionGroup } from "../lib/data/question_group";
  import SingleFolderView from "../lib/singlefolderview.svelte";
  import ShowQuestion from "../lib/showquestion.svelte";

  let question_groups: Array<QuestionGroup> = [
    {
      group_name: "Term Final",
      sets: [
        {
          set_name: "2019-20",
          questions: [
            {
              question_id: 1,
              answers: [
                {
                  answer_id: 1,
                  answer_title: "I want to answer this question",
                  answer_body:
                    "Traffic jams are very common in every country, especially in big cities. Because in big cities the population, as well as the number of vehicles, are very high. Therefore, with the increasing number of vehicles and overuse of roads, traffic jams are occurring alarmingly. Like other developing countries, traffic jams are also a major problem in Bangladesh as well. People are stuck for hours in a traffic jam; also the situation is getting worse day by day.",
                  upvote: 55,
                  author: "Lord Shattik",
                  voted: 0,
                  question_id: -1,
                },
              ],
              question_group: "",
              question_set: "",
              question_body: "What is a Turing Machine?",
            },
          ],
        },
      ],
    },
    {
      group_name: "Assignment",
      sets: [
        {
          set_name: "2019-20",
          questions: [
            {
              question_id: 1,
              answers: [
                {
                  answer_id: 1,
                  answer_title: "I want to answer this question",
                  answer_body:
                    "Traffic jams are very common in every country, especially in big cities. Because in big cities the population, as well as the number of vehicles, are very high. Therefore, with the increasing number of vehicles and overuse of roads, traffic jams are occurring alarmingly. Like other developing countries, traffic jams are also a major problem in Bangladesh as well. People are stuck for hours in a traffic jam; also the situation is getting worse day by day.",
                  upvote: 55,
                  author: "Lord Siam",
                  voted: 0,
                  question_id: -1,
                },
              ],
              question_group: "",
              question_set: "",
              question_body: "Design a Turing Machine",
            },
          ],
        },
      ],
    },
    {
      group_name: "Lab Quiz",
      sets: [
        {
          set_name: "2019-20",
          questions: [
            {
              question_id: 1,
              answers: [
                {
                  answer_id: 1,
                  answer_title: "I want to answer this question",
                  answer_body:
                    "Traffic jams are very common in every country, especially in big cities. Because in big cities the population, as well as the number of vehicles, are very high. Therefore, with the increasing number of vehicles and overuse of roads, traffic jams are occurring alarmingly. Like other developing countries, traffic jams are also a major problem in Bangladesh as well. People are stuck for hours in a traffic jam; also the situation is getting worse day by day.",
                  upvote: 55,
                  author: "Lord Ashraf",
                  voted: 0,
                  question_id: -1,
                },
              ],
              question_group: "",
              question_set: "",
              question_body: "Write a query showing rank of all employees",
            },
          ],
        },
      ],
    },
    {
      group_name: "Mid Term",
      sets: [
        {
          set_name: "2019-20",
          questions: [
            {
              question_id: 1,
              answers: [
                {
                  answer_id: 1,
                  answer_title: "I want to answer this question",
                  answer_body:
                    "Traffic jams are very common in every country, especially in big cities. Because in big cities the population, as well as the number of vehicles, are very high. Therefore, with the increasing number of vehicles and overuse of roads, traffic jams are occurring alarmingly. Like other developing countries, traffic jams are also a major problem in Bangladesh as well. People are stuck for hours in a traffic jam; also the situation is getting worse day by day.",
                  upvote: 55,
                  author: "Lord Nafis",
                  voted: 0,
                  question_id: -1,
                },
              ],
              question_group: "",
              question_set: "",
              question_body:
                "Derive the Fourier Series Expansion of the following function",
            },
          ],
        },
      ],
    },
  ];

  //iterate over all question groups and set question_group to be group_name and question_set to be set_name and question_id to be question_id
  question_groups.forEach((question_group) => {
    question_group.sets.forEach((set) => {
      set.questions.forEach((question) => {
        question.answers.forEach((answer) => {
          answer.question_id = question.question_id;
        });
        question.question_group = question_group.group_name;
        question.question_set = set.set_name;
      });
    });
  });

  function get_question_sets(group_name: string) {
    console.log(group_name);
    let sets: Array<string> = [];
    question_groups.forEach((question_group) => {
      if (question_group.group_name === group_name) {
        question_group.sets.forEach((set) => {
          sets.push(set.set_name);
        });
      }
    });
    console.log(group_name, sets);
    return sets;
  }

  function get_questions(set_name: string) {
    let questions: Array<Question> = [];
    question_groups.forEach((question_group) => {
      question_group.sets.forEach((set) => {
        if (set.set_name === set_name) {
          //spread questions to add set.questions
          questions = [...questions, ...set.questions];
        }
      });
    });
    console.log(set_name, questions);
    return questions;
  }

  const params = useParams();
  console.log($params);
  let first_link: string;
  let second_link: string;
  $: {
    console.log($params.group_name, $params.set_name);
    if ($params.group_name) {
      first_link = "/archive/" + $params.group_name;
    } else first_link = null;
    if ($params.first_name && $params.set_name) {
      second_link = "/archive/" + $params.group_name + "/" + $params.set_name;
    } else second_link = null;
  }
</script>

<div class="bg-slate-900 pt-20">
  <nav
    class="flex px-5 mx-3 py-3 mt-10 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <Link
          to="/archive"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            /></svg
          >
          Archive
        </Link>
      </li>
      {#if $params.group_name}
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              /></svg
            >
            <Link
              to={first_link}
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >{$params.group_name}</Link
            >
          </div>
        </li>
      {/if}
      {#if $params.set_name}
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              /></svg
            >
            <Link
              to={second_link}
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >{$params.set_name}</Link
            >
          </div>
        </li>
      {/if}
    </ol>
  </nav>

  <Router>
    <div class="bg-slate-900 pt-5 pl-10 pr-3 my-5">
      <Route>
        {#each question_groups as question_group}
          <SingleFolderView name={question_group.group_name} />
        {/each}
      </Route>
      <Route path=":group_name" let:params>
        {#each get_question_sets(params.group_name) as set}
          <SingleFolderView name={set} />
        {/each}
      </Route>
      <Route path=":group_name/:set_name" let:params>
        {#each get_questions(params.set_name) as question}
          <ShowQuestion {question} />
        {/each}
      </Route>
    </div>
  </Router>
</div>
